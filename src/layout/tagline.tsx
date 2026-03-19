import { myrderBlue, myrderRed } from '../util/colors';

export const Tagline = () => {
    return (
        <div style={{ width: '100%' }}>
            <div
                style={{
                    fontFamily: 'MPlantin',
                    fontSize: '30pt',
                    textAlign: 'center',
                }}
            >
                A{' '}
                <span
                    style={{
                        color: myrderRed,
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                    }}
                >
                    NEW
                </span>{' '}
                shared-deck Magic the Gathering format based around{' '}
                <span style={{ color: myrderBlue, fontWeight: 'bold' }}>
                    Myr Servitor
                </span>
            </div>
            <hr
                style={{
                    marginBottom: '20px',
                    marginTop: '20px',
                    width: '80%',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    fontFamily: 'MPlantin',
                    fontSize: '20pt',
                    fontStyle: 'italic',
                    justifyContent: 'space-around',
                    marginBottom: '80px',
                    width: '100%',
                }}
            >
                <div>{`"It's black Dandân"`}</div>
                <div>{'"I love it!"'}</div>
                <div>{'"Definitely worth a try"'}</div>
            </div>
        </div>
    );
};
