import { useState } from 'react'

function Quote() {
  const [clapCount, setClapCount] = useState(15)

  const clap = () => {
    setClapCount(clapCount + 1)
  }

  return (
    <div className="post">
      <p className="post-p">
        Yalnız tek bir şeye ihtiyacımız vardır, çalışkan olmak. Servet ve onun tabii neticesi olan refah ve saadet yalnız ve ancak çalışkanların hakkıdır.
      </p>
      <div className="post-clap">
        <span className="post-clapCount">{clapCount}</span>
        <button className="post-clapButton" onClick={clap}>
          Alkışla
        </button>
      </div>
    </div>
  )
}

export default Quote
