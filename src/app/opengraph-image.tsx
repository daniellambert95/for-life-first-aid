import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'For Life First Aid - Cardiac First Responder Course'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #66bb6a, #4db6ac)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: 30,
          }}
        >
          For Life First Aid
        </div>
        <div
          style={{
            fontSize: 48,
            color: 'white',
            textAlign: 'center',
            marginBottom: 30,
          }}
        >
          Cardiac First Responder Course
        </div>
        <div
          style={{
            fontSize: 32,
            color: 'white',
            textAlign: 'center',
            opacity: 0.9,
          }}
        >
          PHECC Certified | €85 | Dublin
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
