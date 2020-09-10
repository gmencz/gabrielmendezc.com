import React from 'react'

type RequestStatus = 'initial' | 'in-flight' | 'completed' | 'failed'

type RequestPerformer = () => Promise<void>

interface Request<TData> {
  data: TData | null
  status: RequestStatus
  error: unknown
}

// Identical API to native fetch
function useLazyFetch<TData>(
  info: RequestInfo,
  init?: RequestInit,
): [RequestPerformer, Request<TData>] {
  const [data, setData] = React.useState<TData | null>(null)
  const [status, setStatus] = React.useState<RequestStatus>('initial')
  const [error, setError] = React.useState<unknown>(null)

  const makeRequest = async () => {
    setStatus('in-flight')
    try {
      const response = await fetch(info, init)
      const json: TData = await response.json()
      setData(json)
      setStatus('completed')
    } catch (error) {
      setError(error)
      setStatus('failed')
    }
  }

  return [makeRequest, {data, status, error}]
}

export default useLazyFetch
