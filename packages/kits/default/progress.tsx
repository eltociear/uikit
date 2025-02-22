import { Container } from '@react-three/uikit'
import { ComponentPropsWithoutRef, useMemo } from 'react'
import { colors } from './theme.js'
import { WithReactive } from '@react-three/uikit/dist/properties/utils.js'
import { computed } from '@preact/signals-core'

export function Progress({
  value,
  ...props
}: WithReactive<{ value?: number }> & Omit<ComponentPropsWithoutRef<typeof Container>, 'children'>) {
  const width = useMemo(() => computed(() => `${(value ?? 0) as number}%` as const), [value])
  return (
    <Container height={16} width="100%" borderRadius={1000} backgroundColor={colors.secondary} {...props}>
      <Container height="100%" borderRadius={1000} backgroundColor={colors.primary} width={width} />
    </Container>
  )
}
