import * as React from "react"

function Twitter(props) {
  return (
    <svg viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <title id="title" lang="en">
        Twitter
      </title>
      <a href="https://www.twitter.com/devrba" target="blank">
        <linearGradient
          id="prefix__tw"
          x1={10.341}
          x2={40.798}
          y1={8.312}
          y2={38.769}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#2aa4f4" />
          <stop offset={1} stopColor="#007ad9" />
        </linearGradient>
        <path
          fill="url(#prefix__tw)"
          d="M46.105 11.02a17.56 17.56 0 01-4.979 1.362 8.65 8.65 0 003.812-4.758 17.395 17.395 0 01-5.502 2.082A8.653 8.653 0 0033.122 7c-4.783 0-8.661 3.843-8.661 8.582 0 .671.079 1.324.226 1.958A24.678 24.678 0 016.838 8.566a8.482 8.482 0 00-1.172 4.322c0 2.979 1.525 5.602 3.851 7.147a8.798 8.798 0 01-3.926-1.072v.101c0 4.163 2.986 7.63 6.944 8.419a8.617 8.617 0 01-2.276.308 9.204 9.204 0 01-1.632-.158c1.102 3.402 4.299 5.889 8.087 5.963A17.499 17.499 0 015.958 37.27c-.701 0-1.387-.04-2.065-.122A24.75 24.75 0 0017.171 41c15.927 0 24.641-13.079 24.641-24.426 0-.372-.012-.742-.029-1.108a17.032 17.032 0 004.322-4.446"
        />
      </a>
    </svg>
  )
}

const MemoTwitter = React.memo(Twitter)
export default MemoTwitter
