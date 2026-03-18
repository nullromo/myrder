import { Body } from './body';
import { Footer } from './footer';
import { Header } from './header';

export const MyrderApp = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                background: 'black',
                minHeight: '100vh',
            }}
        >
            <div
                style={{ boxShadow: '0 0 12px 8px inset black', width: '90%' }}
            >
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    );
};
