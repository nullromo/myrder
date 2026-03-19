import { Body } from './layout/body';
import { Stripe } from './layout/stripe';

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
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 0 12px 8px inset black',
                    width: '90%',
                    flexGrow: 1,
                }}
            >
                <Stripe />
                <Body />
                <Stripe />
            </div>
        </div>
    );
};
