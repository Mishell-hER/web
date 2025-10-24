import Image from 'next/image';

const creators = [
  {
    name: 'Arenas Flores, Melissa Nicole',
    email: '71318771@continental.edu.pe',
    imageUrl: 'https://picsum.photos/seed/creator1/100/100',
  },
  {
    name: 'Hermoza Concha, Mishell Maricielo',
    email: '73005420@continental.edu.pe',
    imageUrl: 'https://picsum.photos/seed/creator2/100/100',
  },
  {
    name: 'Sanchez Mamani, Gabriel Fabian',
    email: '76197162@continental.edu.pe',
    imageUrl: 'https://picsum.photos/seed/creator3/100/100',
  },
  {
    name: 'Nina Beltran, Andrea Belen',
    email: '74648270@continental.edu.pe',
    imageUrl: 'https://picsum.photos/seed/creator4/100/100',
  },
  {
    name: 'Cabana Mamani, Bliss Eittel',
    email: '71658178@continental.edu.pe',
    imageUrl: 'https://picsum.photos/seed/creator5/100/100',
  },
  {
    name: 'Yanqui Tipula, Mireya Mayumi',
    email: '77347486@continental.edu.pe',
    imageUrl: 'https://picsum.photos/seed/creator6/100/100',
  },
  {
    name: 'Zuñiga Carlos, Armando',
    email: '71829816@continental.edu.pe',
    imageUrl: 'https://picsum.photos/seed/creator7/100/100',
  },
];

const CreatorCard = ({ creator }: { creator: (typeof creators)[0] }) => (
  <div className="flex flex-col items-center text-center">
    <Image
      src={creator.imageUrl}
      alt={`Foto de ${creator.name}`}
      width={100}
      height={100}
      className="rounded-full mb-4 border-2 border-primary/50"
      data-ai-hint="profile picture"
    />
    <p className="font-semibold text-sm text-foreground">{creator.name}</p>
    <p className="text-xs text-muted-foreground">{creator.email}</p>
  </div>
);

export function CreatorsSection() {
  const leftCreators = creators.slice(0, 3);
  const rightCreators = creators.slice(3, 6);
  const bottomCreator = creators[6];

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-primary tracking-wider">
          Nuestros Creadores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-10">
            {leftCreators.map((creator) => (
              <CreatorCard key={creator.email} creator={creator} />
            ))}
          </div>
          <div className="space-y-10">
            {rightCreators.map((creator) => (
              <CreatorCard key={creator.email} creator={creator} />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <CreatorCard creator={bottomCreator} />
        </div>
      </div>
    </section>
  );
}
