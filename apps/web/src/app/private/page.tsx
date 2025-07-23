import { Button } from '@ui/components/ui/button';
import { createClient } from '@utils/supabase/server';
import { redirect } from 'next/navigation';
// import { signOut } from '@/actions/auth';

export default async function PrivatePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/signin');
  }

  async function signOut() {
    'use server';
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect('/signin');
  }

  return (
    <main>
      <p>Hello {data.user.email}</p>
      <form action={signOut}>
        <Button type="submit">Sign out</Button>
      </form>
    </main>
  );
}
