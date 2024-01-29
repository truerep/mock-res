import {
  appEnv
} from '@/helpers';

export const dynamic = 'force-dynamic';
export async function GET(request, {params}) {
  console.log(params.endpoint, '<---');
  const res = await fetch(`${appEnv.apiUrl}/${params.endpoint}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await res.json();

  return Response.json(data);
}
