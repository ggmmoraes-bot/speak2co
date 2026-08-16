insert into public.features (key, name, description, category, route, sort_order)
values ('learning_tools', 'Learning Tools', 'Listening, Grammar, Speaking, Reading, Writing e Flashcards gerais', 'tools', '/listening', 60)
on conflict (key) do nothing;

insert into public.plan_features (plan_key, feature_key, enabled)
select p.key, 'learning_tools', p.key <> 'free'
from public.plans p
on conflict do nothing;

update public.plan_features set enabled = true
where plan_key = 'free'
  and feature_key in ('progress_dashboard', 'study_plan', 'study_plan_full', 'cefr_certificate', 'placement_test');