-- Enable required extension
create extension if not exists pgcrypto;

-- Shared timestamp trigger to maintain updated_at
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql set search_path = public;

-- 1) User profiles (map to auth users by id = auth.uid())
create table if not exists public.profiles (
  id uuid primary key not null,
  full_name text,
  is_premium boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- RLS: users can manage only their own profile
create policy if not exists "Users can view their own profile"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);

create policy if not exists "Users can insert their own profile"
  on public.profiles
  for insert
  to authenticated
  with check (auth.uid() = id);

create policy if not exists "Users can update their own profile"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

create trigger if not exists update_profiles_updated_at
before update on public.profiles
for each row execute function public.update_updated_at_column();

-- 2) Progress records per student
create table if not exists public.progress_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  subject text not null,
  topic text,
  score numeric not null check (score >= 0),
  total numeric not null check (total > 0),
  taken_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.progress_records enable row level security;

create policy if not exists "Users can view their own progress"
  on public.progress_records
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy if not exists "Users can create their own progress"
  on public.progress_records
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy if not exists "Users can update their own progress"
  on public.progress_records
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy if not exists "Users can delete their own progress"
  on public.progress_records
  for delete
  to authenticated
  using (auth.uid() = user_id);

create index if not exists idx_progress_user_taken_at on public.progress_records (user_id, taken_at desc);

create trigger if not exists update_progress_updated_at
before update on public.progress_records
for each row execute function public.update_updated_at_column();

-- 3) Mock exams (content). Authenticated users can read; only service role can write (no write policies)
create table if not exists public.mock_exams (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subject text not null,
  description text,
  duration_minutes int,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.mock_exams enable row level security;

create policy if not exists "Anyone authenticated can read exams"
  on public.mock_exams
  for select
  to authenticated
  using (true);

create trigger if not exists update_mock_exams_updated_at
before update on public.mock_exams
for each row execute function public.update_updated_at_column();

-- 4) Exam attempts per user
create table if not exists public.mock_exam_attempts (
  id uuid primary key default gen_random_uuid(),
  exam_id uuid not null references public.mock_exams(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  score numeric,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  answers jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.mock_exam_attempts enable row level security;

create policy if not exists "Users can view their own attempts"
  on public.mock_exam_attempts
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy if not exists "Users can create their own attempts"
  on public.mock_exam_attempts
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy if not exists "Users can update their own attempts"
  on public.mock_exam_attempts
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy if not exists "Users can delete their own attempts"
  on public.mock_exam_attempts
  for delete
  to authenticated
  using (auth.uid() = user_id);

create index if not exists idx_attempts_user_exam_started_at on public.mock_exam_attempts (user_id, exam_id, started_at desc);

create trigger if not exists update_mock_exam_attempts_updated_at
before update on public.mock_exam_attempts
for each row execute function public.update_updated_at_column();