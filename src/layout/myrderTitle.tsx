import { myrderBlue, myrderRed } from '../util/colors';

export const MyrderTitle = () => {
    return (
        <div
            style={{
                background: 'black',
                borderRadius: '20px',
                boxShadow: '0px 0px 12px 8px',
                fontFamily: 'Beleren',
                fontSize: '64pt',
                height: 'fit-content',
                padding: '0 24px 0 20px',
                position: 'relative',
                textAlign: 'center',
                top: '90%',
                width: 'fit-content',
            }}
        >
            <span style={{ color: myrderRed }}>MYR</span>
            <span style={{ color: myrderBlue }}>DER</span>
        </div>
    );
};
