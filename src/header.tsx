import { myrderBlue } from './colors';

export const Header = () => {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                color: 'white',
                background: myrderBlue,
                boxShadow: `12px 0px 12px -6px inset black, -12px 0px 12px -6px inset black`,
            }}
        >
            &nbsp;
        </div>
    );
};
