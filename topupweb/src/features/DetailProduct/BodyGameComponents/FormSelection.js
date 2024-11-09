import { Card, Col, Form, Row } from "react-bootstrap"
import { Input } from "../../../shared/components/Input/Input"

export const FormSelection = () =>{
    return(<>
        <div>
            <Col >
                <Row className="row">
                    {/* account data */}
                    <Col md={6} className="mb-3 form-item-row">
                        <Input 
                            inputName={"ID"} 
                            label={"ID"} 
                            placeholder={"Ketikan ID"}
                        />

                    </Col>
                    <Col >
                        <Input 
                            inputName={"Server"} 
                            label={"Server"}
                            placeholder={"Ketikan Server"}
                        />
                        
                    </Col>
                    <Form.Text className="text-light text-small">Untuk menemukan ID Pengguna Anda, klik avatar Anda di pojok kiri atas layar dan buka tab Info Umum. Contoh: 12345678 (1234).</Form.Text>
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