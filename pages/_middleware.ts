import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    const url = req.url
    if (url.includes('api')) {
        return NextResponse.next()
    }

    const basicAuth = req.headers.get('authorization')

    if (basicAuth) {
        const auth = basicAuth.split(' ')[1]
        const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

        if (user === 'admin' && pwd === 'its-a-me-mario') {
            return NextResponse.next()
        }
    }

    return new Response('Auth required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    })
}
