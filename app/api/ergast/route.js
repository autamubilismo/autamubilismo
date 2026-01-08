import { NextResponse } from 'next/server';

const ALLOWED_PATHS = new Set([
  'current/driverStandings.json',
  'current/constructorStandings.json',
  'current/last/results.json',
]);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');

  if (!path || !ALLOWED_PATHS.has(path)) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
  }

  const res = await fetch(`https://ergast.com/api/f1/${path}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Upstream error' }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
