"use client";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database }  from "@/types_db";


interface SupabaseProviderProps {
    children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children
}) => {
    const [supabaseCLient] = useState(() =>
        createBrowserSupabaseClient<Database>()
    );

    return (
        <SessionContextProvider supabaseClient={supabaseCLient}>
            {children}
        </SessionContextProvider>
    )
}


export default SupabaseProvider;