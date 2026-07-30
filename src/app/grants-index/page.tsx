import GrantsListPage, {
  generateMetadata as generateGrantsMetadata,
} from '@/app/grants/page';

export const dynamic = 'force-static';

export async function generateMetadata() {
  return generateGrantsMetadata({ searchParams: Promise.resolve({}) });
}

export default function StaticGrantsListPage() {
  return <GrantsListPage searchParams={Promise.resolve({})} />;
}
