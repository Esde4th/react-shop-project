function Footer() {
    return (
        <footer className='page-footer deep-purple lighten-3 '>
            <div className='footer-copyright'>
                <div className='container deep-purple-text text-lighten-5'>
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className='deep-purple-text text-lighten-5 right'
                        href='#'
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
