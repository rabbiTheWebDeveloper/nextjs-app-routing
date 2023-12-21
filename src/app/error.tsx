'use client' // Error components must be Client Components
import { Button, Result } from 'antd'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
    <Button type="primary">Back Home</Button>
  }
  />
  )
}