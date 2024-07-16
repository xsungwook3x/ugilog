'use client';

import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Github, GithubIcon } from 'lucide-react';

function Header() {
  return (
    <nav>
        <div>
            <div>
                <Link href="/blog">UGI-LOG</Link>
            </div>
            <div>
                <Button asChild variant='ghost' size='icon'>
                    <Link href='https://github.com/xsungwook3x' target='_blank'>
                        <Github className='size-[1.2rem]' />
                    </Link>
                </Button>
            </div>
        </div>
    </nav>
  )
}

export default Header