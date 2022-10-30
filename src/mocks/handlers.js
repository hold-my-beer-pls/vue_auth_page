import { rest } from 'msw'

export default [
    rest.post('/api/login', async (req, res, ctx) => {
        const { email, password } = await req.json()
        if (email === 'admin@admin.com' && password === 'admin') {
            sessionStorage.setItem('is-authenticated', 'true')
            return res(
                ctx.status(200),
            )
        } else {
            return res(
                ctx.status(401),
                ctx.json({
                    errorMessage: 'The email address or password is incorrect',
                }),
            )
        }


    }),

    rest.get('/api/user', (req, res, ctx) => {
        const isAuthenticated = sessionStorage.getItem('is-authenticated')

        if (!isAuthenticated) {
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authorized',
                }),
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                username: 'admin',
            }),
        )
    }),
]