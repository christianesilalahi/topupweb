import { Card, Col, Form, Row } from "react-bootstrap"

export const FormSelection = () =>{
    return(<>
        <div>

        {/* <section class="relative scroll-mt-20 rounded-xl bg-card/50 shadow-2xl md:scroll-mt-[5.75rem]" id="1">
            <div class="flex items-center overflow-hidden rounded-t-xl bg-card">
                <div class="flex h-10 w-10 items-center justify-center bg-primary font-semibold text-primary-foreground">1</div>
                <h2 class="px-4 py-2 text-sm/6 font-semibold text-card-foreground">Masukkan Data Akun</h2>
            </div>
            <div class="p-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="id" class="block text-xs font-medium text-foreground pb-2">ID</label>
                        <div class="flex flex-col items-start">
                            <input class="relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75" type="number" id="id" name="id" min="0" placeholder="Ketikan ID" autocomplete="id" value=""/>
                        </div>
                    </div>
                    <div>
                        <label for="server" class="block text-xs font-medium text-foreground pb-2">Server</label>
                        <div class="flex flex-col items-start">
                            <input class="relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75" type="number" id="server" name="server" min="0" placeholder="Ketikan Server" autocomplete="server" value=""/>
                        </div>
                    </div>
                </div>
                <div class="mt-4 text-xs text-card-foreground">
                    <div>
                        <p>
                            <em>Untuk menemukan ID Pengguna Anda, klik avatar Anda di pojok kiri atas layar dan buka tab Info Umum. Contoh: 12345678 (1234).</em>
                        </p>
                    </div>
                </div>
            </div>
        </section> */}
            <Col md={8}>
                {/* <Card className="mb-4 fluid"> */}
                    {/* <Card.Body> */}
                        <Row>
                            {/* account data */}
                            <Col md={6} className="mb-3">
                                <Form.Group controlId="formAccountID" 
                                // className="mt-2"
                                >
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" placeholder="Ketikan ID" />
                                    
                                </Form.Group>

                            </Col>
                            <Col >
                                <Form.Group controlId="formServer" 
                                // className="mt-2"
                                >
                                    <Form.Label>Server</Form.Label>
                                    <Form.Control type="text" placeholder="Ketikan Server" />
                                </Form.Group>
                            </Col>
                            <Form.Text className="text-muted">Untuk menemukan ID Pengguna Anda, klik avatar Anda di pojok kiri atas layar dan buka tab Info Umum. Contoh: 12345678 (1234).</Form.Text>
                        </Row>
                    {/* </Card.Body> */}
                {/* </Card> */}

            </Col>

            {/* <div class="p-4">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="id" class="block text-xs font-medium text-foreground pb-2">ID</label>
                        <div class="flex flex-col items-start">
                            <input class="relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75" type="number" id="id" name="id" min="0" placeholder="Ketikan ID" autocomplete="id" value=""/>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    
    </>)
}