// react
import React from 'react'

// components
import ResultNumSection from './components/ResultNumSection'
import ResultYearSection from './components/ResultYearSection'
import ResultDistributionSection from './components/ResultDistributionSection'
import ResultSertificateSection from './components/ResultSertificateSection'

function Result() {
  return (
    <> 
        <ResultNumSection />
        <ResultYearSection />
        <ResultDistributionSection />
        <ResultSertificateSection />
    </>
  )
}

export default Result