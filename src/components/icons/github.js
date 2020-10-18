import * as React from "react"
import { Button } from "./button"

function Github(props) {
  return (
    <Button
      href="https://www.github.com/ricardoaguiar/"
      target="blank"
      id="github"
    >
      <svg width={29} height={28} {...props}>
        <path
          d="M14.399 0C6.473 0 .046 6.427.046 14.355c0 6.34 4.113 11.721 9.817 13.62.718.132.98-.312.98-.692 0-.341-.013-1.244-.02-2.441-3.993.867-4.836-1.925-4.836-1.925-.653-1.658-1.594-2.1-1.594-2.1-1.303-.89.099-.872.099-.872 1.44.101 2.198 1.48 2.198 1.48 1.28 2.193 3.36 1.56 4.178 1.192.13-.927.502-1.56.911-1.919-3.187-.363-6.538-1.594-6.538-7.094 0-1.568.56-2.848 1.478-3.852-.148-.363-.64-1.822.14-3.799 0 0 1.205-.386 3.947 1.471a13.785 13.785 0 013.594-.483c1.22.006 2.447.165 3.594.483 2.74-1.857 3.943-1.47 3.943-1.47.783 1.976.29 3.435.144 3.798.92 1.004 1.475 2.284 1.475 3.852 0 5.515-3.357 6.728-6.554 7.083.515.443.974 1.32.974 2.659 0 1.918-.018 3.466-.018 3.937 0 .384.26.83.987.69 5.7-1.902 9.809-7.278 9.809-13.618C28.754 6.427 22.327 0 14.398 0"
          fill="#fff"
          fillRule="evenodd"
        />
      </svg>
    </Button>
  )
}

const MemoGithub = React.memo(Github)
export default MemoGithub
