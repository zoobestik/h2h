import { Component } from 'react';
import Layout from 'components/Layout';
import ErrorPageBoundary from 'components/ErrorBoundary';

export default class Routes extends Component {
    render() {
        const { page, pages } = this.props;
        const Page = pages[page.key];
        return (
            <Layout>
                <ErrorPageBoundary>
                    <Page/>
                </ErrorPageBoundary>
            </Layout>
        );
    }
}
