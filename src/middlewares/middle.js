import ContactRouter from '../router/contact_router/contact.router.js';

export default function Middlewares(app) {
    app.use(ContactRouter);
}
