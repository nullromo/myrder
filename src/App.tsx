import { Body } from './body';
import { Footer } from './footer';
import { Header } from './header';

export const MyrderApp = () => {
    return (
        <div
            style={{
                alignItems: 'center',
                background: 'black',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100%',
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
