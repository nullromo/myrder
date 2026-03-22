import { darkBlue } from '../util/colors';

export const DarkSection = (
    props: {
        readonly description: string;
        readonly title?: string;
    } & React.PropsWithChildren,
) => {
    return (
        <div style={{ marginBottom: '40px', width: '100%' }}>
            <div
                style={{
                    background: darkBlue,
                    border: '1px solid white',
                    borderRadius: '20px',
                    margin: '20px auto auto auto',
                    maxWidth: '1400px',
                }}
            >
                {props.title ? (
                    <div style={{ textAlign: 'center', width: '100%' }}>
                        <span
                            style={{
                                background: darkBlue,
                                border: '1px solid white',
                                borderRadius: '10px',
                                fontSize: '24pt',
                                padding: '0 10px',
                                position: 'relative',
                                top: -15,
                            }}
                        >
                            {props.title}
                        </span>
                    </div>
                ) : null}
                <div
                    style={{
                        margin: '20px 30px 40px 30px',
                        textAlign: 'center',
                        textWrap: 'balance',
                    }}
                >
                    {props.description}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                    }}
                >
                    {props.children}
                </div>
            </div>
        </div>
    );
};
