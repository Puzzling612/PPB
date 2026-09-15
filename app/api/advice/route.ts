import {env} from 'cloudflare:workers';
import {handleAdvice} from '@/lib/advice';
export async function POST(request:Request){const settings=env as unknown as Record<string,string>;return handleAdvice(request,{key:settings.OPENAI_API_KEY,model:settings.OPENAI_MODEL});}
