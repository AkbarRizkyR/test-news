import { Result, Button } from 'antd'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  )
}

export default NotFoundPage