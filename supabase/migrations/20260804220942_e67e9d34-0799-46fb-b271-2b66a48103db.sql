INSERT INTO public.features (key, name, description, category, route, is_active, sort_order)
VALUES ('study_plan_full', 'Plano de estudos completo', 'Todas as semanas do plano, ajustes com IA, travar semanas e histórico de versões', 'core', '/painel', true, 35)
ON CONFLICT (key) DO NOTHING;

INSERT INTO public.plan_features (plan_key, feature_key, enabled)
SELECT p.key, 'study_plan_full', p.key <> 'free'
FROM public.plans p
ON CONFLICT (plan_key, feature_key) DO UPDATE SET enabled = EXCLUDED.enabled;