import * as React from "react"
import { Button } from "./button"

function Netlify(props) {
  return (
    <Button href="https://www.netlify.com/" target="blank" id="netlify">
      <svg width={28} height={28} {...props}>
        <path
          fill=" #00C7B7"
          d="M20.286 9.717l-.01-.005c-.006-.002-.012-.004-.017-.01a.08.08 0 01-.02-.067l.564-3.451 2.647 2.648-2.753 1.171a.06.06 0 01-.024.004h-.011a.074.074 0 01-.015-.012 1.253 1.253 0 00-.361-.278zm3.84-.21l2.83 2.83c.588.588.882.882.99 1.222.015.05.028.101.039.153l-6.765-2.865a.532.532 0 00-.01-.004c-.028-.011-.059-.024-.059-.051 0-.028.032-.041.06-.052l.008-.004zm3.743 5.113c-.146.275-.43.56-.913 1.042l-3.19 3.19-4.128-.859-.022-.004c-.037-.006-.075-.012-.075-.045a1.246 1.246 0 00-.479-.871c-.016-.017-.012-.044-.007-.068 0-.003 0-.007.002-.01l.776-4.765.003-.017c.004-.036.01-.078.044-.078a1.263 1.263 0 00.847-.486c.006-.007.01-.015.02-.02.023-.01.05 0 .075.01l7.047 2.981zm-4.838 4.967l-5.247 5.247.898-5.52.001-.008.005-.02c.007-.018.026-.026.044-.033l.01-.004a1.351 1.351 0 00.507-.377c.017-.02.038-.04.065-.044a.066.066 0 01.022 0l3.695.76zm-6.358 6.358l-.591.592-6.54-9.451a.31.31 0 00-.007-.01c-.01-.014-.021-.028-.02-.044.002-.012.009-.022.017-.031l.007-.01c.02-.029.037-.058.055-.09l.015-.025.002-.002c.01-.018.02-.034.037-.044.015-.007.037-.004.053 0l7.245 1.493a.12.12 0 01.056.025c.01.009.011.02.014.03a1.283 1.283 0 00.75.859c.02.01.012.033.002.057a.174.174 0 00-.01.033c-.092.555-.875 5.33-1.085 6.618zm-1.236 1.235c-.435.431-.693.66-.983.752a1.46 1.46 0 01-.88 0c-.341-.108-.635-.402-1.223-.99l-6.567-6.567 1.715-2.66a.11.11 0 01.03-.035c.017-.013.044-.007.066 0a1.777 1.777 0 001.196-.06c.02-.008.04-.013.055.001a.139.139 0 01.02.023l6.571 9.537zM5.15 19.742l-1.506-1.507 2.975-1.27a.061.061 0 01.024-.004c.025 0 .04.025.053.047a2.125 2.125 0 00.095.135l.01.011c.008.013.002.025-.007.037l-1.643 2.55zm-2.173-2.174l-1.906-1.906c-.324-.324-.559-.559-.723-.761l5.796 1.202a.613.613 0 00.022.003c.035.006.075.013.075.046 0 .037-.043.054-.08.068l-.017.007zM.015 13.921a1.46 1.46 0 01.066-.362c.108-.34.402-.634.99-1.222l2.44-2.44a1588.673 1588.673 0 003.377 4.884c.02.026.042.056.02.077a2.027 2.027 0 00-.289.386.117.117 0 01-.036.045c-.01.006-.02.004-.031.002H6.55L.015 13.92zm4.148-4.676l3.28-3.28c.308.136 1.43.61 2.433 1.033.76.321 1.452.613 1.67.708.021.01.04.018.05.04.006.013.003.03 0 .044a1.463 1.463 0 00.382 1.334c.022.022 0 .054-.019.08l-.01.016-3.33 5.158a.1.1 0 01-.031.036c-.018.011-.043.006-.063.001a1.66 1.66 0 00-.397-.054c-.12 0-.25.022-.38.046h-.001c-.015.002-.028.005-.04-.004a.153.153 0 01-.033-.037zm3.942-3.942l4.246-4.246c.588-.587.882-.882 1.222-.989a1.46 1.46 0 01.88 0c.341.107.635.402 1.223.99l.92.92-3.02 4.676a.113.113 0 01-.03.035c-.017.013-.043.007-.065 0a1.531 1.531 0 00-1.402.27c-.02.02-.049.01-.074-.002-.394-.171-3.461-1.468-3.9-1.654zm9.133-2.684l2.788 2.788-.672 4.16v.012a.099.099 0 01-.006.027c-.007.015-.022.018-.036.022a1.336 1.336 0 00-.4.2.112.112 0 00-.015.012c-.008.009-.016.017-.03.018a.083.083 0 01-.03-.005l-4.25-1.805-.008-.004c-.027-.01-.059-.024-.059-.051a1.605 1.605 0 00-.226-.669c-.02-.033-.043-.068-.026-.103zm-2.872 6.284l3.983 1.687c.022.01.046.02.055.042a.077.077 0 010 .042.99.99 0 00-.021.192v.112c0 .028-.029.04-.055.05l-.008.003c-.631.27-8.858 3.778-8.87 3.778-.013 0-.026 0-.038-.013-.022-.022 0-.052.02-.08a.555.555 0 00.01-.015l3.272-5.068.006-.008c.02-.031.041-.065.076-.065l.033.005c.075.01.14.02.207.02.496 0 .956-.242 1.234-.656a.117.117 0 01.025-.029c.02-.014.049-.007.071.003zm-4.56 6.708l8.967-3.825s.013 0 .025.013c.049.049.09.081.13.112l.02.013c.019.01.037.021.039.04 0 .008 0 .012-.002.019l-.768 4.719-.003.019c-.005.036-.01.078-.045.078a1.263 1.263 0 00-1.002.618l-.004.006c-.01.017-.02.033-.036.042-.016.007-.036.004-.052 0l-7.15-1.475c-.008-.001-.112-.379-.12-.38z"
        />
      </svg>
    </Button>
  )
}

const MemoNetlify = React.memo(Netlify)
export default MemoNetlify