insert into public.features (key, name, description, category, route, sort_order, is_active)
values ('courses_upper_intermediate', 'Curso Upper-Intermediate (B2)', 'Comunicação profissional e situações complexas (B2).', 'cursos', null, 9, true)
on conflict (key) do update set name = excluded.name, description = excluded.description, category = excluded.category, sort_order = excluded.sort_order, is_active = true;

insert into public.plan_features (plan_key, feature_key, enabled) values
  ('free','courses_upper_intermediate', false),
  ('essential','courses_upper_intermediate', false),
  ('premium','courses_upper_intermediate', true),
  ('signature','courses_upper_intermediate', true)
on conflict (plan_key, feature_key) do update set enabled = excluded.enabled;