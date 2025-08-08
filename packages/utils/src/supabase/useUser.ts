import type { User } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { createSupabaseBrowserClient } from './client';

type UseSupabaseUserResult = {
  user: User | null;
  email: string | null;
  loading: boolean;
};

type UseSupabaseUserOptions = {
  url?: string;
  anonKey?: string;
};

export function useUser(
  options?: UseSupabaseUserOptions,
): UseSupabaseUserResult {
  // const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = useMemo(
    () => createSupabaseBrowserClient(options),
    [options],
  );

  useEffect(() => {
    const isMounted = true;
    const loadUser = async () => {
      setLoading(true);
      const { data, error } = await supabase.auth.getClaims();

      if (error || !data?.claims) {
        redirect('/login');
      }

      if (!isMounted) return;
      // setUser(data.claims ?? null);
      setEmail(data.claims.email);
      setLoading(false);
    };
    void loadUser();

    // const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    //   if (!isMounted) return;
    //   setUser(session?.user ?? null);
    // });

    // return () => {
    //   isMounted = false;
    //   data.subscription.unsubscribe();
    // };
  }, [supabase]);

  return {
    user: null,
    email: email ?? null,
    loading,
  };
}
