export const TabContent = (props: React.PropsWithChildren) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'MPlantin',
                fontSize: '20pt',
            }}
        >
            {props.children}
        </div>
    );
};
