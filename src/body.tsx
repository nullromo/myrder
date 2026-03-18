import { myrderBlue, myrderRed } from './colors';
import myrServitor from './images/myr-servitor.jpg';

export const Body = () => {
    return (
        <div
            style={{
                flexDirection: 'column',
                minHeight: '100vh',
                display: 'flex',
            }}
        >
            <div
                style={{
                    height: '40vh',
                    backgroundImage: `url(${myrServitor})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    boxShadow: 'inset 0px -12px 12px 8px',
                }}
            >
                <div
                    style={{
                        fontSize: '64pt',
                        width: 'fit-content',
                        height: 'fit-content',
                        padding: '0 24px 0 20px',
                        textAlign: 'center',
                        position: 'relative',
                        top: '90%',
                        background: 'black',
                        fontFamily: 'Beleren',
                        boxShadow: '0px 0px 12px 8px',
                        borderRadius: '20px',
                    }}
                >
                    <span style={{ color: myrderRed }}>MYR</span>
                    <span style={{ color: myrderBlue }}>DER</span>
                </div>
            </div>
            <div
                style={{
                    marginTop: '70px',
                    textAlign: 'center',
                    color: 'white',
                    flexGrow: 1,
                    height: '100px',
                    background: 'black',
                }}
            >
                <div style={{ fontFamily: 'Mplantin', fontSize: '30pt' }}>
                    A{' '}
                    <span
                        style={{
                            textDecoration: 'underline',
                            color: myrderRed,
                            fontWeight: 'bold',
                        }}
                    >
                        NEW
                    </span>{' '}
                    shared-deck Magic the Gathering format based around{' '}
                    <span style={{ fontWeight: 'bold', color: myrderBlue }}>
                        Myr Servitor
                    </span>
                </div>
                <hr
                    style={{
                        width: '80%',
                        marginTop: '20px',
                        marginBottom: '20px',
                    }}
                />
                <div
                    style={{
                        fontStyle: 'italic',
                        fontSize: '20pt',
                        fontFamily: 'Mplantin',
                        justifyContent: 'space-around',
                        display: 'flex',
                    }}
                >
                    <div>{`"It's black Dandân"`}</div>
                    <div>{'"I love it!"'}</div>
                    <div>{'"Definitely worth a try"'}</div>
                </div>
            </div>
        </div>
    );
};
