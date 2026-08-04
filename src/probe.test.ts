import { test } from 'vitest'
import { requireFeature } from '@/lib/entitlement-middleware'
test('shape', () => { console.log(Object.keys(requireFeature('x') as any), JSON.stringify(Object.keys((requireFeature('x') as any).options ?? {}))) })
