import { WalletButton } from '@/components/wallet-button';
import { ERC20InteractionPanel } from '@/components/ERC20InteractionPanel';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 md:p-24">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            My DApp
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            A Web3 application built with Cradle
          </p>
          
          <div className="flex justify-center mb-8">
            <WalletButton />
          </div>
        </div>

        {/* ERC20 Interaction Panel */}
        <div className="max-w-2xl mx-auto">
          <ERC20InteractionPanel />
        </div>
      </div>
    </main>
  );
}