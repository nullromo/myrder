export const Title = (props: { readonly title: string }) => {
    return (
        <div
            style={{ alignItems: 'center', display: 'flex', margin: '20px 0' }}
        >
            <hr style={{ flexGrow: 1, margin: '0 20px' }} />
            <div
                style={{
                    color: 'black',
                    fontSize: '30pt',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                {props.title}
            </div>
            <hr style={{ flexGrow: 1, margin: '0 20px' }} />
        </div>
    );
};
