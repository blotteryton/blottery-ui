import React from 'react';
import MarketplaceMain from "../components/Marketplace/MarketplaceMain";
import {useSearchParams} from "react-router-dom";

const Marketplace = () => {
    const [URLSearchParams] = useSearchParams()

    return (
        <MarketplaceMain search_params={URLSearchParams} />
    );
}

export default Marketplace;