import PortfolioDetail from '@/components/PortfolioDetail'
import React from 'react'

const page = ({params}: {params: {slug: string}}) => {
  return (
    <div>
      <PortfolioDetail heading={params.slug}/>
    </div>
  )
}

export default page