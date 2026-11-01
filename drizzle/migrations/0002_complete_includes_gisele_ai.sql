INSERT INTO public.plan_features (plan_key, feature_key, enabled)
SELECT 'complete','gisele_ai',true
WHERE NOT EXISTS (SELECT 1 FROM public.plan_features WHERE plan_key='complete' AND feature_key='gisele_ai');
UPDATE public.plan_features SET enabled=true WHERE plan_key='complete' AND feature_key='gisele_ai';