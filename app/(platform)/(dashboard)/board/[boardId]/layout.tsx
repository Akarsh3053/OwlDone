const BoardIdLayout = (
    {children}:{children:React.ReactNode}
    ) => {
    return(
        <div>
            <main className="relative pt-28 h-full">
                {children}
            </main>
        </div>
    );
};



export default BoardIdLayout;