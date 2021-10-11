import { Box, Button, Flex, Image, Link, Stack, Text } from "@chakra-ui/react";

export function SumamaryOrder() {
    return (
        <Flex
            bgImage='/background-desktop.svg'
            backgroundSize='contain'
            bgRepeat='no-repeat'
            bgColor='blue.200'
            h='100vh'
        >
            <Box
                w='450px'
                borderRadius='15px'
                bg='white'
                margin='auto'
            >
                <Image
                    src='illustration-hero.svg'
                    borderRadius='20px 20px 0 0'
                />

                <Box
                    px='45px'
                    textAlign='center'
                    pt='30px'
                    margin='1px'
                >
                    <Text
                        fontSize='2rem'
                        fontWeight='Bold'
                    >
                        Order Summary
                    </Text>

                    <Text mt='15px'>
                        You can now listen to millions of song, audiobooks, and podcasts on any device anywhere you like!
                    </Text>

                    <Box
                        h='85px'
                        alignItems='center'
                        display='flex'
                        px='35px'
                        borderRadius='10px'
                        bg='gray.100'
                        mt='15px'

                    >
                        <Image boxSize='50px' src='icon-music.svg' />
                        <Box lineHeight='25px' pl='15px'>
                            <Text fontWeight='bold'>Annual Plan</Text>
                            <Text>$59.99/year</Text>
                        </Box>
                        <Link
                            color='blue.800'
                            ml='auto'
                            fontSize='0.75rem'
                            fontWeight='bold'
                        >
                            Change
                        </Link>
                    </Box>


                    <Button
                        mt='25px'
                        w='100%'
                        shadow='dark-lg'
                        bg='blue.800'
                        color='white'
                        size='md'
                    >
                        Proceed to Payment
                    </Button>
                    <br />
                    <Button
                        bg='whithe'
                        mt='10px'
                        mb='20px'
                        w='100%'
                        size='md'
                        colorScheme='gray'
                        variant='unstyled'
                    >
                        Cancel Order
                    </Button>

                </Box>

            </Box>
        </Flex>
    )
}