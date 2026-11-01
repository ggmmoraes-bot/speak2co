import * as React from 'react'
import { Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  productName?: string
  amount?: string
}

const Email = ({ name, productName, amount }: Props) => (
  <Html lang="pt-BR" dir="ltr">
    <Head />
    <Preview>Compra confirmada — seu acesso vitalício foi liberado</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={brand}>
            <span style={{ color: '#ffffff' }}>Speak</span>
            <span style={{ color: '#C9A227' }}>2Co</span>
          </Text>
        </Section>
        <Heading style={h1}>Compra confirmada!</Heading>
        <Text style={text}>{name ? `Olá, ${name}!` : 'Olá!'}</Text>
        <Text style={text}>
          Recebemos o seu pagamento de <strong>{productName || 'seu produto Speak2Co'}</strong>
          {amount ? ` (${amount})` : ''}. Seu <strong>acesso vitalício já está liberado</strong>.
        </Text>
        <Text style={text}>Pagamento único — nada mais será cobrado. Sem mensalidade e sem renovação automática.</Text>
        <Button style={button} href="https://speak2co.lovable.app/painel">Acessar minha plataforma</Button>
        <Hr style={hr} />
        <Text style={small}>Speak2Co · English for Every Opportunity</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) =>
    `Compra confirmada: ${d?.productName || 'Speak2Co'} — acesso vitalício liberado`,
  displayName: 'Compra confirmada',
  previewData: { name: 'Ana', productName: 'Speak2Co All Access', amount: 'R$ 97,90' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, Arial, sans-serif' }
const container = { maxWidth: '560px', margin: '0 auto', padding: '0 0 24px' }
const header = { backgroundColor: '#0B1B3A', padding: '20px 24px', borderRadius: '8px 8px 0 0' }
const brand = { fontSize: '24px', fontWeight: 700, margin: 0 }
const h1 = { color: '#0B1B3A', fontSize: '24px', padding: '0 24px', marginTop: '28px' }
const text = { color: '#1f2937', fontSize: '15px', lineHeight: '24px', padding: '0 24px' }
const button = { backgroundColor: '#C9A227', color: '#111111', fontWeight: 700, padding: '12px 22px', borderRadius: '6px', marginLeft: '24px', textDecoration: 'none' }
const hr = { borderColor: '#e5e7eb', margin: '28px 24px 12px' }
const small = { color: '#6b7280', fontSize: '12px', padding: '0 24px' }
