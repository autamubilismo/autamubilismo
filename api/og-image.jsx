// api/og-image.jsx
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url)
    
    const titulo = searchParams.get('titulo') || 'Título da Notícia'
    const resumo = searchParams.get('resumo') || 'Resumo da notícia'
    const imagem = searchParams.get('imagem') // URL da imagem de fundo (opcional)

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            padding: '60px',
            backgroundColor: '#1a1a1a',
            backgroundImage: imagem ? `url(${imagem})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay escuro */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
          />
          
          {/* Conteúdo */}
          <div style={{ display: 'flex', flexDirection: 'column', zIndex: 1 }}>
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '20px',
                lineHeight: 1.2,
                maxWidth: '900px',
              }}
            >
              {titulo}
            </h1>
            <p
              style={{
                fontSize: '28px',
                color: '#e0e0e0',
                maxWidth: '800px',
                lineHeight: 1.4,
              }}
            >
              {resumo}
            </p>
          </div>
          
          {/* Logo do site */}
          <div
            style={{
              position: 'absolute',
              top: '60px',
              right: '60px',
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'white',
              zIndex: 1,
            }}
          >
            Autamubilismo.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(e.message)
    return new Response('Failed to generate image', { status: 500 })
  }
}