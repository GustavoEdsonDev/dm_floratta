import buque from '../assets/buque.jpg'
import doces from '../assets/doces.jpg'
import untitled from '../assets/Untitled.jpg'

export interface Product {
  id: number
  src: string
  title: string
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    src: buque,
    title: 'Buquê DM Floratta',
    description:
      'Um lindo buquê com rosas vermelhas artificiais, acompanhado de chocolates artesanais em forma de coração. Perfeito para expressar seus sentimentos especiais. Cada rosa artificial é cuidadosamente selecionada para garantir beleza duradoura.',
  },
  {
    id: 2,
    src: doces,
    title: 'Caixa de Chocolates',
    description:
      'Chocolates premium em formato de coração com mensagens personalizadas. Cada chocolate é feito artesanalmente com ingredientes de alta qualidade. Ideal para presentes especiais que despertam emoções doces e inesquecíveis.',
  },
  {
    id: 3,
    src: untitled,
    title: 'Arranjo Especial',
    description:
      'Um arranjo elegante combinando rosas artificiais vermelhas vivas, pérolas brancas e acabamento premium em tons dourados. Esta composição sofisticada expressa luxo, elegância e sentimento genuíno, perfeita para ocasiões memoráveis.',
  },
]
