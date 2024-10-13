import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Github, Twitter, Send, Copy, Shield } from 'lucide-react'

export default function Component() {
  const [activeSection, setActiveSection] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -110; // 110px offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText('9CjySnBjEYGPnvdWLMZngxLx4jVrTHLMpdpknVFGCps2')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 p-4 md:p-6 z-50">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TEDDYBEAR-COINMARKETCAP-LOGO-200X200-MCzh0UDrQZLIjoZNXFUVuxnuu8tbWp.webp" alt="Teddy Bear Token" className="w-12 h-12 mr-2" />
            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">$TEDDY</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-x-4"
          >
            {['about', 'tokenomics', 'rewards', 'security', 'roadmap', 'faq'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(section)
                }}
                className={`hover:text-blue-400 transition-colors ${activeSection === section ? 'text-blue-400' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </motion.div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-24 relative z-10">
        <section className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Teddy Bear Token
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            "Everyone has a favorite teddy, now let this one be yours!"
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300"
            whileHover={{ 
              scale: 1.125,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('presale')}
          >
            Join Presale
          </motion.button>
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">About Teddy Bear Token</h3>
          <motion.div
            className="relative p-[2px] rounded-lg overflow-hidden"
            whileHover={{ boxShadow: '0 0 75px rgba(59, 130, 246, 0.5)', scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
            <div className="relative bg-black p-6 rounded-lg z-10">
              <p className="mb-4 text-gray-300">
                Teddy Bear Token ($TEDDY) is not just another memecoin—it's a cuddly revolution in the crypto world! Inspired by everyone's favorite childhood companion, $TEDDY brings <span className="font-bold text-yellow-400">HUGE REWARDS</span> to holders while keeping things warm and fuzzy.
              </p>
              <p className="text-gray-300">
                Whether you're a crypto enthusiast or just looking for a bear hug in the blockchain, Teddy Bear Token is here to give you a warm, fuzzy feeling in your wallet. <span className="font-bold text-yellow-400">The longer you hodl, the more you earn!</span> Get ready for
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solana-Logo-AVfuzDadkWZrFboQSScl7b87HRD50Y.png" alt="Solana" className="inline-block w-10 h-8 mx-1 align-text-bottom" />
                rewards that will make you feel like you're in a never-ending bear hug!
              </p>
            </div>
          </motion.div>
        </section>

        <section id="tokenomics" className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Tokenomics</h3>
          <motion.div 
            className="relative p-[2px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ boxShadow: '0 0 75px rgba(139, 92, 246, 0.5)', scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
            <div className="relative bg-black p-6 rounded-lg z-10">
              <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Tax on Transactions: 25%</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li><span className="font-bold text-yellow-400">15% to Holders: HUGE REWARDS</span> Distributed in <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solana-Logo-AVfuzDadkWZrFboQSScl7b87HRD50Y.png" alt="Solana" className="inline-block w-10 h-8 mx-1 align-text-bottom" /> to all $TEDDY holders</li>
                <li>5% to Liquidity: Helps maintain price stability</li>
                <li>5% for Development & Marketing: For project growth and memes</li>
              </ul>
            </div>
          </motion.div>
        </section>

        <section id="rewards" className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">Auto-Distribution Mechanism</h3>
          <motion.div 
            className="relative p-[2px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ boxShadow: '0 0 75px rgba(59, 130, 246, 0.5)', scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
            <div className="relative bg-black p-6 rounded-lg z-10">
              <h4 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Effortless Rewards</h4>
              <p className="text-gray-300 mb-4">
                Our innovative auto-distribution mechanism ensures that $TEDDY holders receive their 
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solana-Logo-AVfuzDadkWZrFboQSScl7b87HRD50Y.png" alt="Solana" className="inline-block w-10 h-8 mx-1 align-text-bottom" />
                rewards automatically, without any action required!
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Rewards are distributed in real-time with every transaction</li>
                <li>No need to claim or stake - just hold $TEDDY in your wallet</li>
                <li>The more $TEDDY you hold, the more 
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Solana-Logo-AVfuzDadkWZrFboQSScl7b87HRD50Y.png" alt="Solana" className="inline-block w-10 h-8 mx-1 align-text-bottom" />
                rewards you receive</li>
                <li>Watch your Solana balance grow with each $TEDDY transaction</li>
              </ul>
            </div>
          </motion.div>
        </section>

        <section id="security" className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Security First</h3>
          <motion.div 
            className="relative p-[2px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ boxShadow: '0 0 75px rgba(34, 197, 94, 0.5)', scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 animate-spin-slow"></div>
            <div className="relative bg-black p-6 rounded-lg z-10">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 mr-2 text-green-400" />
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Smart Contract Audit</h4>
              </div>
              <p className="text-gray-300 mb-4">
                At Teddy Bear Token, we prioritize the security of our holders. That's why we're committed to undergoing a thorough smart contract audit to ensure there are no vulnerabilities that can be exploited.
              </p>
              <ul className="list-disc list-inside text-gray-300">
                <li>Professional audit by a reputable blockchain security firm</li>
                <li>Comprehensive review of our smart contract code</li>
                <li>Identification and resolution of potential vulnerabilities</li>
                <li>Public release of audit results for full transparency</li>
              </ul>
            </div>
          </motion.div>
        </section>

        <section id="roadmap" className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">Roadmap to the Moon</h3>
          <div className="space-y-4">
            {[
              { title: "Phase 1: Birth of the Bear", items: ["Launch presale with no buy tax", "Deploy $TEDDY smart contracts on Solana", "Meme marketing blitz"] },
              { title: "Phase 2: Bear Market? No Problem!", items: ["List $TEDDY on major DEXs", "Start Solana rewards distribution", "Meme contest for the community"] },
              { title: "Phase 3: Teddy Takes Over", items: ["Launch limited edition Teddy Bear NFTs", "Partner with meme lords and influencers", "Introduce $TEDDY staking for extra hugs (rewards)"] }
            ].map((phase, index) => (
              <motion.div 
                key={index}
                className="relative p-[2px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ boxShadow: '0 0 75px  rgba(236, 72, 153, 0.5)', scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                <div className="relative bg-black p-4 rounded-lg z-10">
                  <h4 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">{phase.title}</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="presale" className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">Join the Presale</h3>
          <motion.div 
            className="relative p-[2px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ boxShadow: '0 0 75px rgba(59, 130, 246, 0.5)', scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
            <div className="relative bg-black p-6 rounded-lg z-10">
              <p className="text-xl mb-4 text-gray-300">To join the presale, send a minimum of 1 SOL to the following address:</p>
              <div className="flex items-center justify-center bg-gray-800 p-3 rounded-lg mb-4">
                <code className="text-green-400 text-lg mr-2">9CjySnBjEYGPnvdWLMZngxLx4jVrTHLMpdpknVFGCps2</code>
                <button onClick={copyToClipboard} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition-colors duration-200">
                  {copied ? 'Copied!' : <Copy size={16} />}
                </button>
              </div>
              <p className="text-gray-300">Once you've sent the SOL, you'll receive your $TEDDY tokens when the presale ends. Don't miss out on this bear-y good opportunity!</p>
            </div>
          </motion.div>
        </section>

        <section id="faq" className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">Beary Important Questions</h3>
          <div className="space-y-4">
            {[
              { question: "What is Teddy Bear Token ($TEDDY)?", answer: "Teddy Bear Token is a cuddly cryptocurrency built on the Solana blockchain that offers HUGE PASSIVE REWARDS to holders. It's designed with a 25% tax on transactions, which is redistributed to holders in the form of Solana (SOL) tokens. It's like getting a warm hug from your favorite teddy, but in crypto form!" },
              { question: "How do I participate in the presale?", answer: "To participate in the presale, send a minimum of 1 SOL to the provided address. You'll receive your $TEDDY tokens when the presale ends. During the presale, there's no buy tax, meaning you get more tokens for your money! It's like getting extra stuffing in your teddy bear!" },
              { question: "How are rewards distributed?", answer: "Rewards are distributed automatically to all holders, just like magic! A portion of the 25% tax on each transaction is converted to SOL and sent to your wallet based on your $TEDDY holdings. The more $TEDDY you hodl, the more SOL hugs you get! It's a bear-y good deal!" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="relative p-[2px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ boxShadow: '0 0 75px rgba(59, 130, 246, 0.5)', scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                <div className="relative bg-black p-4 rounded-lg z-10">
                  <h4 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">{item.question}</h4>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white py-4 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Join the Teddy Bear Army</h3>
              <p>Stay updated with the latest hugs and memes</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-pink-400 transition-colors"><Send size={24} /></a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.img
            key={i}
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TEDDYBEAR-COINMARKETCAP-LOGO-200X200-MCzh0UDrQZLIjoZNXFUVuxnuu8tbWp.webp"
            className="absolute w-8 h-8 opacity-20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -20,
              rotate: Math.random() * 360
            }}
            animate={{ 
              y: window.innerHeight + 20,
              rotate: Math.random() * 360
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  )
}