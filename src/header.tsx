import { myrderBlue } from './colors';

export const Header = () => {
    return (
        <div
            style={{
                background: myrderBlue,
                boxShadow: `12px 0px 12px -6px inset black, -12px 0px 12px -6px inset black`,
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
            }}
        >
            &nbsp;
        </div>
    );
};
